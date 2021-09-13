import { environment } from '../../environments/environment';

export class AppConstants {    
    
    public static get productPath(): string { return environment.urlService+"/product/"; }
 
    
    
}