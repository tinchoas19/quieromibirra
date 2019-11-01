import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";
import { Storage } from "@ionic/storage";
import { Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-interna-promocion",
  templateUrl: "./interna-promocion.page.html",
  styleUrls: ["./interna-promocion.page.scss"]
})
export class InternaPromocionPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private storage: Storage,
    private router: Router,
    public alertController: AlertController
  ) {}

  promo: any = {};
  dataUser: any = {};

  ngOnInit() {
    console.log("InternaPromocionPage");
    this.getStorage();
    this.getParams();
  }

  getParams() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.promo = JSON.parse(params.promo);
        console.log("PARAMS", this.promo);
      }
    });
  }

  retirarCompraPromo() {
    this.service.retirarCompraPromo(this.promo, this.dataUser).subscribe(x => {
      console.log("SUCCES...", JSON.parse(x["_body"]));

      let response = JSON.parse(x["_body"])["data"];

      if (response == "updated") {
        this.presentAlertConfirm();
      }
    });
  }

  getStorage() {
    this.storage.get("dataUser").then(storageData => {
      this.dataUser = storageData;
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "¡Muchas gracias!",
      message:
        "Ya podés retirar la promoción y tus puntos ya se encuentran sumados a tu cuenta",
      buttons: [
        {
          text: "Ok!",
          handler: () => {
            this.router.navigate(["home"]);
          }
        }
      ]
    });

    await alert.present();
  }
}
