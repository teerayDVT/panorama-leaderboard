package patterns.structural.decorator;

public class ShirtDecorator implements Person {

  private Person teenager;

  public ShirtDecorator(Person wrappee) {
    System.out.println("SD CONTAINS - " + wrappee);
    teenager = wrappee;
  }

  @Override
  public void wearItem() {
    teenager.wearItem();
    System.out.println("I am now wearing a shirt");
  }
}
