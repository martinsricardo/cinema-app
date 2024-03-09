import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    /* verifica se o componente foi criado */
    expect(component).toBeTruthy();
  });

  it('should call getAllMovies', () => {
    //should call getAllMovies quando o teste for true
    const getAllMoviesSpy = spyOn(component, 'getAllMovies');
    component.ngOnInit();
    expect(getAllMoviesSpy).toHaveBeenCalled();
  });
});
