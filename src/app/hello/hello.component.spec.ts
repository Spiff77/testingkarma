import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';
import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';



describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloComponent ],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have \'hello works!\' in a p tag', () => {
    const p: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.innerText).toEqual('hello works!')
  });

  it('shoud have count = 1 after clicking on the button', () => {
    clickOnButton();
    expect(component.count).toEqual(1)
  });

  it('shoud have span with value 1 after clicking on the button', () => {
    clickOnButton()
    fixture.detectChanges();
    const span: HTMLSpanElement = fixture.debugElement.query((By.css('span'))).nativeElement;
    expect(span.innerText).toEqual('1');
  });

  it('shoud have div with class as \'red\'', () => {
    const span: HTMLSpanElement = fixture.debugElement.query((By.css('div'))).nativeElement;
    expect(span.classList).toContain('red');
  });

  it('shoud have div with class as \'green\' after click', () => {
    const span: HTMLSpanElement = fixture.debugElement.query((By.css('div'))).nativeElement;
    span.click()
    fixture.detectChanges()
    expect(span.classList).toContain('green');
  });

  it('change the class of the div according to input text', () => {
    const div: HTMLSpanElement = fixture.debugElement.query((By.css('div'))).nativeElement;
    const input: HTMLInputElement = fixture.debugElement.query((By.css('input'))).nativeElement;

    input.value = 'blue'
    input.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    console.log(div.classList);
    expect(div.classList).toContain('blue');
  });


  function clickOnButton() {
    const b: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    b.click();
  }

  /**
   * challenge:
   faire un div avec la class 'red'.
   lorsqu'on clique dessus, la classe devient 'green'
   (utilisez ngClass)

   Avec le test vérifier que le div a bien la class 'red' au démarage
   et vérifier que lors d'un click, la class se transform bien en 'green

   */
});
