var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5036",
                                              "http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                      });
});

// services.AddResponseCaching();

builder.Services.AddControllers();

var app = builder.Build();
app.UseHttpsRedirection();

// If we want to serve global html file we place the html file in a folder
// wwwroot
app.UseStaticFiles();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapGet("/get-all-movies", async () =>
{
    //COOKIES
    
    using var httpClient = new HttpClient();

    //Theaters
    //httpClient.DefaultRequestHeaders.Add("Cookie", "affinity='4f7f7c787ea03ecf'; dtCookie=v_4_srv_3_sn_7574D2C06579286471229FA2D3770D6C_perc_100000_ol_0_mul_1_app-3Ac9c68fe916d7d5c7_1_rcs-3Acss_0; CookieConsent={stamp:%27l+btp5DtdgatDTjb1vWRe/xiQeR9VJbfMueR75bx3S2+vvL5kknfyg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1709508395553%2Cregion:%27pt%27}; __cf_bm=ywdN9BAF9xbyxGYG1H6yMewPdQEq5SvtOLog3suLev8-1709511934-1.0.1.1-iGqfy1EXxWU1lJdJkYxnODLcXGP4ipqGFfI3NJ5SyltwT9f9B_eKlkeCIVEiJcEIxh5A.stCALmCW.usd.3_VQ");

    //getAllMovies
     httpClient.DefaultRequestHeaders.Add("Cookie", "__cf_bm=mPcEwC7K_DD77b.nJVU2E0v10JpJSxd2omNr2iOReAs-1709508390-1.0.1.1-w35Y1mxP3nwxRwlMdnc2o02zT_670VV1cBq_VE4ae3e_or03tc6gvra_y_cNCNssd8m8tAnk.Zfp1Zx5UFRFbw; affinity='4f7f7c787ea03ecf'; dtCookie=v_4_srv_3_sn_7574D2C06579286471229FA2D3770D6C_perc_100000_ol_0_mul_1_app-3Ac9c68fe916d7d5c7_1_rcs-3Acss_0; CookieConsent={stamp:%27l+btp5DtdgatDTjb1vWRe/xiQeR9VJbfMueR75bx3S2+vvL5kknfyg==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1709508395553%2Cregion:%27pt%27}");
    
    
    // Making a GET request to another endpoint
    //var response = await httpClient.GetAsync("https://www.cinemas.nos.pt/graphql/execute.json/cinemas/getMoviesInTheaters");
    var response = await httpClient.GetAsync("https://www.cinemas.nos.pt/graphql/execute.json/cinemas/getAllMovies");

    if (response.IsSuccessStatusCode)
    {
        // Read and return the response from the other endpoint
        var content = await response.Content.ReadAsStringAsync();
        return content;
    }
    else
    {
        return "Error occurred while fetching data";
    }
});


app.MapControllers();

app.Run();



