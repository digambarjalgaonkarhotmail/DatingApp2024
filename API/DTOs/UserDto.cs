namespace API.DTOs;

public class UserDto
{
    public required string Email { get; set; }
    public required string UserName { get; set; }
    public required string Token { get; set; }
}
