export interface AuthRequest {
    email: string;
    organizations: any[];
    password: string;
    projects: any[];
}

export interface AuthResponse {
    projects: Project[];
    token: string;
}

export interface Project {
    default: boolean;
    project: ProjectDetails;
    role: string;
}

export interface ProjectDetails {
    annual_employee_cost: number;
    business_year_hours: number;
    color: string;
    default: boolean;
    description: string;
    id: number;
    name: string;
    owner_conversation: string;
    owner_email: string;
}

export interface Incident {
    commander: Commander;
    description: string;
    incident_priority: IncidentPriority;
    incident_severity: IncidentSeverity;
    incident_type: IncidentType;
    project: ProjectDetails;
    reporter: Commander;
    resolution: string;
    status: string;
    tags: any[];
    title: string;
    visibility: string;
}

export interface Commander {
    added_reason: string;
    department: string;
    individual: Individual;
    location: string;
    team: string;
}

export interface Individual {
    company: string;
    contact_type: string;
    created_at: Date;
    email: string;
    external_id: string;
    filters: any[];
    id: number;
    is_active: boolean;
    is_external: boolean;
    mobile_phone: string;
    name: string;
    notes: string;
    office_phone: string;
    owner: string;
    title: string;
    updated_at: Date;
    weblink: string;
}

export interface IncidentPriority {
    color: string;
    default: boolean;
    description: string;
    enabled: boolean;
    executive_report_reminder: number;
    name: string;
    page_commander: boolean;
    project: ProjectDetails;
    tactical_report_reminder: number;
    view_order: number;
}

export interface IncidentSeverity {
    color: string;
    default: boolean;
    description: string;
    enabled: boolean;
    name: string;
    project: ProjectDetails;
    view_order: number;
}

export interface IncidentType {
    default: boolean;
    description: string;
    enabled: boolean;
    exclude_from_metrics: boolean;
    executive_template_document: TemplateDocument;
    incident_template_document: TemplateDocument;
    name: string;
    plugin_metadata: any[];
    project: ProjectDetails;
    review_template_document: TemplateDocument;
    tracking_template_document: TemplateDocument;
    visibility: string;
}

export interface TemplateDocument {
    description: string;
    id: number;
    name: string;
    resource_id: string;
    resource_type: string;
    weblink: string;
}

export interface IncidentResponseProject {
    color: string;
    id: number;
    name: string;
}