using System.Collections.Generic;
using DataViewBackend.Models;

namespace DataViewBackend.Repository.IRepository
{
    public interface IProductCommentDataRepository
    {
        ICollection<ProductCommentData> GetProductComments();
        ProductCommentData GetProductComment(int productCommentId);
        bool ProductCommentExists(int id);
        bool CreateProductComment(ProductCommentData productCommentData);
        bool UpdateProductComment(ProductCommentData productCommentData);
        bool DeleteProductComment(ProductCommentData productCommentData);
        bool Save();
    }
}