public class CarParking {
  public static void main(String[] args) {
    {
       Garage garage=new Garage();
       Car car= new Car("BMW");

       garage.park(car);
    }
  }
}
class Garage{
public void park(does){
  System.out.println("The "+does+"is parked in the garage" )
}
}
class Car{
  String name;
  public void Car(String name){
    this.name=name;
  }
}
