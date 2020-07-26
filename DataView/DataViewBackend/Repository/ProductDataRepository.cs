using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;



namespace DataViewBackend.Repository
{
    public class ProductDataRepository : IProductDataRepository
    {
        private readonly ApplicationDbContext _db;
        public ProductDataRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        public ICollection<ProductData> GetProductDatas()
        {
            return _db.ProductData.OrderBy(a => a.Id).ToList();
        }
        public ProductData GetProductData(int productDataId)
        {
            return _db.ProductData.FirstOrDefault(a => a.Id == productDataId);
        }
    }
}