import { async, TestBed } from '@angular/core/testing';
import { RestaurantReviewsComponent } from './restaurant-reviews.component';
describe('RestaurantReviewsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RestaurantReviewsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RestaurantReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=restaurant-reviews.component.spec.js.map