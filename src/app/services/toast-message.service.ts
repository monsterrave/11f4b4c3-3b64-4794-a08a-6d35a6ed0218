import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: "root"
})
export class ToastMessageService {
    constructor(private messageService: MessageService) { }

    showSuccess(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity, summary, detail });
    }
}
