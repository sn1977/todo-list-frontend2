import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.scss",
})
export class LoginComponent {
    username: string = "";
    password: string = "";

    async loginWithUsernameAndPassword() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append(
        //     "Cookie",
        //     "csrftoken=1LCGgDCPLuGwwsLNlVMl7gUI68v73WMD"
        // );

        const raw = JSON.stringify({
            username: this.username,
            password: this.password,
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };
        try {
            let resp = await fetch(
                "http://127.0.0.1:8000/login/",
                requestOptions
            );
            let json = await resp.json();
            localStorage.setItem("token", json.token);
            // TODO: redirect to home
        } catch (error) {
            console.error(error);
        }
    }
}
