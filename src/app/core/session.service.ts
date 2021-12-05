import { Injectable } from "@angular/core";
import { HttpClients } from "./http.service";
import { ApiService } from "./api.services"

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	public user: any
	private isCheck: boolean;
	private isSession: boolean;

	constructor(
		private socialHttpClient: HttpClients,
		private apiService : ApiService
	) { }

	// public async isLoggedIn(): Promise<boolean> {
	// 	if (this.isCheck) {
	// 		return Promise.resolve(this.isSession);
	// 	}
	// 	await this.socialHttpClient.get(this.apiService.checkSession)
	// 		.then(data => {
	// 			this.isSession = data.status;
	// 			this.isCheck = true;
	// 		})
	// 		.catch(err=>{
	// 			this.isSession = false
	// 		})
	// 	return Promise.resolve(this.isSession);
	// }

	public setSession(status: boolean, data) {
		this.isSession = status;
		localStorage.setItem('user', JSON.stringify(data))
	}

	// public async getLoggedInUser(): Promise<any> {
	// 	if (!this.user || !this.isSession) {
	// 		await this.socialHttpClient.get(this.apiService.userDetails)
	// 			.then(data => {
	// 				this.isSession = true;
	// 				this.user = data
	// 			})
	// 			.catch(err=>{
	// 				console.log(err)
	// 			})
	// 		}
	// 		return Promise.resolve(this.user);
	// }

	public logout() {
		this.isSession = false;
		localStorage.removeItem('user')
	}
}