interface ServiceRequest{
    name: string;
    email: string;
    service: string;
    description: string;
}
 
let requests: ServiceRequest[] = [];
const addRequest = (req:ServiceRequest):
void => {
    requests = [... requests, req];
};