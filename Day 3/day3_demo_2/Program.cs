// See https://aka.ms/new-console-template for more information
using day3_demo_2;
using System.Net.Http.Headers;

Console.WriteLine("Hello, World!");

ElectroProduct obj1 = new ElectroProduct();
obj1.ProductName = "Test";
obj1.ProductID = 1;

//Abstract class in C# has following properties :
//1. An abstract class is declared using the abstract keyword.
//2. It can have abstract methods (without implementation) as well as concrete methods (with implementation).
//3. An abstract class cannot be instantiated( process of creating object) directly.
//4. A class that inherits from an abstract class must implement all its abstract methods unless
//the derived class is also abstract.

class ElectroProduct : Product
{
    public override void Display_Product_Name_details()
    {
        Console.WriteLine("Product name: " + ProductName);
        Console.WriteLine("Product ID: " + ProductID);
        
    }
}