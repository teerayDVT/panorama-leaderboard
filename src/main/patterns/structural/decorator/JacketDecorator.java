package patterns.structural.decorator;

public class JacketDecorator implements Person {

  private Person teenager;

  public JacketDecorator(Person wrappee) {
    System.out.println("JD CONTAINS - " + wrappee);
    teenager = wrappee;
  }

  @Override
  public void wearItem() {
    teenager.wearItem();
    System.out.println("I am now wearing a jacket");
  }
}
