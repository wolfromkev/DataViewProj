using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Models;


namespace DataViewBackend.Repository.IRepository
{
    public interface IProductDataRepository
    {
        ICollection<ProductData> GetProductDatas(); //Get All product data
        ProductData GetProductData(int productDataId); //Get a single product data

   
        

    }
}