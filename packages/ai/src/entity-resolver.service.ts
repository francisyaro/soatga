export interface DatabaseEntity {
  id: string;
  name: string;
  aliases: string[];
}

export enum ResolutionStatus {
  CERTAIN = 'CERTAIN',
  AMBIGUOUS = 'AMBIGUOUS',
  NOT_FOUND = 'NOT_FOUND',
}

export interface EntityResolutionResult<T> {
  status: ResolutionStatus;
  confidenceScore: number;
  matchedEntity?: T;
  candidateEntities?: T[];
  spokenTerm: string;
}

export class EntityResolverService {
  /**
   * Resolves a spoken entity string against known database entities using string similarity & alias matching
   */
  public static resolveEntity<T extends DatabaseEntity>(
    spokenTerm: string,
    dbEntities: T[]
  ): EntityResolutionResult<T> {
    if (!spokenTerm || spokenTerm.trim().length === 0) {
      return {
        status: ResolutionStatus.NOT_FOUND,
        confidenceScore: 0,
        spokenTerm,
      };
    }

    const cleanSpoken = spokenTerm.toLowerCase().trim();

    // 1. Direct Exact or Alias Match
    const matches = dbEntities.filter((entity) => {
      const nameMatch = entity.name.toLowerCase().includes(cleanSpoken) || cleanSpoken.includes(entity.name.toLowerCase());
      const aliasMatch = entity.aliases.some((alias) =>
        alias.toLowerCase().includes(cleanSpoken) || cleanSpoken.includes(alias.toLowerCase())
      );
      return nameMatch || aliasMatch;
    });

    if (matches.length === 1) {
      return {
        status: ResolutionStatus.CERTAIN,
        confidenceScore: 0.98,
        matchedEntity: matches[0],
        spokenTerm,
      };
    }

    if (matches.length > 1) {
      return {
        status: ResolutionStatus.AMBIGUOUS,
        confidenceScore: 0.85,
        candidateEntities: matches,
        spokenTerm,
      };
    }

    // 2. No direct matches
    return {
      status: ResolutionStatus.NOT_FOUND,
      confidenceScore: 0.2,
      spokenTerm,
    };
  }
}
