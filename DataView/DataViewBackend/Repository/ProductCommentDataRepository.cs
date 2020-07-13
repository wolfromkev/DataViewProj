using System.Collections.Generic;
using System.Linq;
using DataViewBackend.Data;
using DataViewBackend.Models;
using DataViewBackend.Repository.IRepository;



namespace DataViewBackend.Repository
{
    public class ProductCommentDataRepository : IProductCommentDataRepository
    {
        private readonly ApplicationDbContext _db;
        public ProductCommentDataRepository(ApplicationDbContext db)
        {
            _db = db;
        }
        
        public ICollection<ProductCommentData> GetProductComments()
        {
            return _db.ProductCommentData.OrderBy(a => a.Id).ToList();
        }

        public ProductCommentData GetProductComment(int productCommentId)
        {
            return _db.ProductCommentData.FirstOrDefault(a => a.Id == productCommentId);
        }
        
        public bool ProductCommentExists(int id)
        {
            bool value = _db.ProductCommentData.Any(a => a.Id == id);
            return value;
        }
        
        public bool CreateProductComment(ProductCommentData productCommentData)
        {
            _db.ProductCommentData.Add(productCommentData);
            return Save();
        }

        public bool UpdateProductComment(ProductCommentData productCommentData)
        {
            _db.ProductCommentData.Update(productCommentData);
            return Save();
        }

        public bool DeleteProductComment(ProductCommentData productCommentData)
        { 
            _db.ProductCommentData.Remove(productCommentData);
            return Save();
        }

        public bool Save()
        {
            return _db.SaveChanges() >= 0 ? true : false;
        }
    }
}