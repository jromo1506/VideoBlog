import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login se vuelve valido con los datos',()=>{
    component.login.setValue({username:'user',password:"1234"});
    expect(component.login.value).toBeTrue();
  });

  it("register form no debe permitir submit si las contraseñas no coinciden",()=>{
    component.switchForms =  false;
    component.register.setValue({
      username:'test',
      password:'1234',
      repassword:'4321'
    });

    spyOn(console,'log');
    component.registrar();

    expect(console.log).not.toHaveBeenCalled();
  });




  
});
