import { async, TestBed } from '@angular/core/testing';
import { RestaurantDetailComponent } from './restaurant-detail.component';
describe('RestaurantDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RestaurantDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RestaurantDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=restaurant-detail.component.spec.js.map