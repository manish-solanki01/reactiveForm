import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { Product } from "../shared/models/product.model";
import { MsgService } from "../shared/services/msg.service";
import { ProductService } from "./product.service";
import { ProductsComponent } from "./products.component";


describe('In Products component', () => {

  let products!: any;
  let component: ProductsComponent;
  let mokeProductService: any;
  let mokeMsgService: any;
  let fixture: ComponentFixture<ProductsComponent>;

  // Call before each test cases

  beforeEach(() => {

    products = {
      body: {
        data: [
          {
            _id: "1",
            image: "../image/img1.png",
            name: "Shirt 1",
            description: "V nack short",
            price: 120,
            category: "cloths",
            subCategory: "man",
            rating: 4.5
          },
          {
            _id: "2",
            image: "../image/img2.png",
            name: "Shirt 2",
            description: "V nack short",
            price: 140,
            category: "cloths",
            subCategory: "man",
            rating: 4.5
          },
          {
            _id: "3",
            image: "../image/img3.png",
            name: "Shirt 3",
            description: "V nack short",
            price: 160,
            category: "cloths",
            subCategory: "woman",
            rating: 5
          }
        ]
      }
    }
  

    // Mock services

    mokeProductService = jasmine.createSpyObj(['allProducts', 'delete']);
    mokeMsgService = jasmine.createSpyObj(['warning', 'errorHandle']);

    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductService,
          useValue: mokeProductService
        },
        {
          provide: MsgService,
          useValue: mokeMsgService
        }
      ]
    })

    // Creating instance (object)...

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;

  })

  // Test cases...

  // First, Load the main data & spy the inner methods...
  // Second, Call function...
  // Third, Expect the result...

  describe('load function', () => {

    it('should load data from service', () => {
      mokeProductService.allProducts.and.returnValue(of(products));
      fixture.detectChanges();
      // "fixture.detectChanges()" will call "ngOnInit" & ngOnInit contain component.load()
      // So no need to call "component.load();"
      // component.load();
      expect(component.products.length).toBe(3);
    })

    it('should handle error in the case of any', () => {
      mokeProductService.allProducts.and.returnValue(throwError(() => new Error("error")));
      fixture.detectChanges();
      expect(component.msgService.errorHandle).toHaveBeenCalled();
    })

  })

  describe('delete function', () => {

    it('should delete single product', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      spyOn(component, "load");
      mokeProductService.delete.and.returnValue(of(true));
      component.deleteProduct(products.body.data[1]);
      expect(component.load).toHaveBeenCalled();
    })

    it('should handle error in the case of any', () => {
      spyOn(window, 'confirm').and.returnValue(true);
      mokeProductService.delete.and.returnValue(throwError(() => new Error("error")));
      component.deleteProduct(products.body.data[1]);
      expect(component.msgService.errorHandle).toHaveBeenCalled();
    })

  })
  
})