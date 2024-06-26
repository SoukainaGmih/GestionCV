export interface Candidat {
    id:number,
    civility: string,
    firstName: string,
    lastName: string,
    country: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string,
    educationLevel: string,
    experience: string,
    trainingType: string,
    jobTitle: string,
    resumeAttachmentPath: string,
    linkedinProfile: string,
    skills: string[],
    imageUrl: string,
    title: string,
    pays: string
}