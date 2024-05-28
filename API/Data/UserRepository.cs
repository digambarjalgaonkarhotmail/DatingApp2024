using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API;

public class UserRepository(DataContext context) : IUserRepository
{
    public async Task<AppUser?> GetUserByIdAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }

    public async Task<AppUser?> GetUserByEmailAsync(string email)
    {
        return await context.Users
            .SingleOrDefaultAsync(x => x.Email == email);
    }

    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await context.Users
            .ToListAsync();
    }
}
