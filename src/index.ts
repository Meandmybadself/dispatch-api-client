import { AuthRequest, AuthResponse, Incident } from "./types";

class DispatchClient {
    private host: string;
    private organization: string;
    private token: string;
    
    constructor(host: string, organization: string) {
        if (!host) {
            throw new Error('host is required');
        }
        if (!organization) {
            throw new Error('organization is required');
        }
        this.host = host;
        this.organization = organization;
    }

    async authenticateWithUsernameAndPassword(email: string, password: string): Promise<AuthResponse> {
        const url = `${this.host}/${this.organization}/auth/login`;
        const body: AuthRequest = {
            email,
            organizations: [],
            password,
            projects: []
        };
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json: AuthResponse = await response.json();
        this.token = json.token;

        return json;
    }

    async getIncident(id: string) {
        const url = `${this.host}/${this.organization}/incidents/${id}`;
        const response = await fetch(url, {
            headers: {
                'Bearer': this.token,
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        return await response.json();
    }

    async listIncidents() {
        const url = `${this.host}/${this.organization}/incidents`;
        const response = await fetch(url, {
            headers: {
                'Bearer': this.token,
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        return await response.json();
    }

    async createIncident(incident: Incident) {
        const url = `${this.host}/${this.organization}/incidents`;
        const response = await fetch(url, {
            body: JSON.stringify(incident),
            headers: {
                'Bearer': this.token,
                'Content-Type': 'application/json'
            },
            method: 'POST',
        });
        return await response.json();
    }

    async updateIncident(incident: Incident) {
        const url = `${this.host}/${this.organization}/incidents/${incident.id}`;
        const response = await fetch(url, {
            body: JSON.stringify(incident),
            headers: {
                'Bearer': this.token,
                'Content-Type': 'application/json'
            },
            method: 'PUT',
        });
        return await response.json();
    }

}