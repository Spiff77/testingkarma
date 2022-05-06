import { ComponentFixture, TestBed } from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodolistComponent} from './todolist.component';



describe('TodoComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('insert textfield content in the list on button click', () => {
      let lis = fixture.debugElement.queryAll(By.css('li'))
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement

      const liSize = lis.length

      input.value = 'test';
      input.dispatchEvent(new Event('input'))

      button.click()

      fixture.detectChanges()

      lis = fixture.debugElement.queryAll(By.css('li'))
      expect(lis.length).toEqual(liSize + 1)

      const li = lis[liSize].query(By.css('span'))
      expect(li.nativeElement.innerText).toEqual('test')


  });


  /**
   * challenge:
   faire un div avec la class 'red'.
   lorsqu'on clique dessus, la classe devient 'green'
   (utilisez ngClass)

   Avec le test vérifier que le div a bien la class 'red' au démarage
   et vérifier que lors d'un click, la class se transform bien en 'green

   */
});
