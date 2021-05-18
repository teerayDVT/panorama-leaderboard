package patterns.structural.decorator;

public class RaincoatDecorator implements Person {

  private Person teenager;

  public RaincoatDecorator(Person wrappee) {
    System.out.println("RD CONTAINS - " + wrappee);
    teenager = wrappee;
  }

  @Override
  public void wearItem() {
    teenager.wearItem();
    System.out.println("I am now wearing a raincoat");
  }
}
