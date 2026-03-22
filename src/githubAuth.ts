import type { App } from "obsidian";
import type { LocalStorageSettings } from "./setting/localStorageSettings";

export class GitHubAuth {
    constructor(
        private readonly app: App,
        private readonly localStorage: LocalStorageSettings
    ) {}

    getPat(): string | null {
        const secretName = this.getSelectedSecretName();
        if (!secretName) {
            return null;
        }
        return this.app.secretStorage.getSecret(secretName);
    }

    getAvailableSecretNames(): string[] {
        return this.app.secretStorage.listSecrets();
    }

    getSelectedSecretName(): string | null {
        return this.localStorage.getGitHubPatSecretName();
    }

    setSelectedSecretName(secretName: string | null): void {
        this.localStorage.setGitHubPatSecretName(secretName);
    }

    hasPat(): boolean {
        const pat = this.getPat();
        return pat !== null && pat.length > 0;
    }
}
