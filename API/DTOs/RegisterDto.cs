using System.ComponentModel.DataAnnotations;

namespace API;

public class RegisterDto
{
    [Required]
    public string Email { get; set; } = string.Empty;
    [Required] 
    public string? FirstName { get; set; }
    [Required] 
    public string? LastName { get; set; }

    [Required]
    [StringLength(8, MinimumLength = 4)]
    public string Password { get; set; } = string.Empty;
}