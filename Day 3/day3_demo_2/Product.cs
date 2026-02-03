using System;
using System.Collections.Generic;
using System.Text;

namespace day3_demo_2
{
    abstract class Product
    {
        public string ProductName { get; set; }
        public int ProductID { get; set; }

        //public string ProductName { get; set; }
        public abstract void Display_Product_Name_detail();
        
        void DisplayProductDetails()
        {
            Console.WriteLine("product name:" + ProductName);
            Console.WriteLine("product id:" + ProductID);
        }


    }
}
