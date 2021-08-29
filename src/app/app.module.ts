import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { MastheadComponent } from './component/masthead/masthead.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import { HeroComponent } from './component/hero/hero.component';
import { ClientsComponent } from './component/clients/clients.component';
import { AboutComponent } from './component/about/about.component';
import { WhyusComponent } from './component/whyus/whyus.component';
import { ServicesComponent } from './component/services/services.component';
import { CtaComponent } from './component/cta/cta.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { NzIconModule,  NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS  } from 'ng-zorro-antd/icon';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { SubscriptionComponent } from './component/subscription/subscription.component'
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PaymentStatusComponent } from './component/payment-status/payment-status.component';
import { PaymentFailedComponent } from './componet/payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './componet/payment-success/payment-success.component';
import { LoginComponent } from './component/login/login.component';
import { DisplayComponent } from './component/display/display.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { IconDefinition } from '@ant-design/icons-angular';
// Import all. NOT RECOMMENDED. ❌
import * as AllIcons from '@ant-design/icons-angular/icons';
import { VendorComponent } from './component/vendor/vendor.component';
import { UserComponent } from './component/user/user.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { UploadcouponsComponent } from './component/uploadcoupons/uploadcoupons.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { EditcouponsComponent } from './component/editcoupons/editcoupons.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ReplaceNewLinePipe } from './component/replace-new-line.pipe';
import { VendoraccountComponent } from './component/vendoraccount/vendoraccount.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AdminComponent } from './component/admin/admin.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzImageModule } from 'ng-zorro-antd/image';
import en from '@angular/common/locales/en-IN';
import { registerLocaleData } from '@angular/common';
import { ViewcouponsComponent } from './component/viewcoupons/viewcoupons.component';
import { UserModule } from './user/user.module';
import { RedemptionComponent } from './component/redemption/redemption.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

registerLocaleData(en);

const LANG_PROVIDERS = [{ provide: NZ_I18N, useValue: en_US }];

const antDesignIcons = AllIcons as {
 [key: string]: IconDefinition;
 };
 const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    HeroComponent,
    ClientsComponent,
    AboutComponent,
    WhyusComponent,
    ServicesComponent,
    CtaComponent,
    PricingComponent,

    ContactComponent,
     FooterComponent,
     MainComponent,
     SubscriptionComponent,
     PaymentStatusComponent,
     PaymentFailedComponent,
     PaymentSuccessComponent,
     LoginComponent,
     DisplayComponent,
     VendorComponent,
     UserComponent,
     UploadcouponsComponent,
     EditcouponsComponent,
     ReplaceNewLinePipe,
     VendoraccountComponent,
     AdminComponent,
     ViewcouponsComponent,
     RedemptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    NzDrawerModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzIconModule,
    NzSelectModule,
    BrowserAnimationsModule,
    NzMessageModule,
    NzResultModule,
    NzSpinModule,
    NzSwitchModule,
    NzTreeModule, NzIconModule.forRoot(icons),NzMenuModule,
    NzTabsModule,
    NzModalModule,
    NzUploadModule,
    NzInputNumberModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzTableModule,
    NzDatePickerModule,
    UserModule,
    NzImageModule,
    NzNotificationModule
  ],
  providers: [LANG_PROVIDERS,],
  bootstrap: [AppComponent]
})
export class AppModule { }
