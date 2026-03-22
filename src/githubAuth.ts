import type { App } from "obsidian";

const GITHUB_PAT_SECRET_ID = "github-pat";

export class GitHubAuth {
    constructor(private readonly app: App) {}

    getPat(): string | null {
        return this.app.secretStorage.getSecret(GITHUB_PAT_SECRET_ID);
    }

    hasPat(): boolean {
        const pat = this.getPat();
        return pat !== null && pat.length > 0;
    }

    setPat(pat: string): void {
        this.app.secretStorage.setSecret(GITHUB_PAT_SECRET_ID, pat);
    }

    clearPat(): void {
        this.app.secretStorage.setSecret(GITHUB_PAT_SECRET_ID, "");
    }
}
