# Getting Started

Client Builder is designed to be used in the development environment, and we highly 
suggest you not use the generation framework in production. The main reason is the 
lack of authentication and authorization mechanisms to protect the exposed API.

In order to use Client Builder in your **ASP.NET application** follow the steps:

### Install the framework
Install the package ``ClientBuilder`` from NuGet:
```bash
dotnet add package ClientBuilder
```

::: warning VERSION
Consider that currently the framework uses .NET 6 as a target SDK
:::

### Register required services
In order to work properly you need to register all Client Builder services into the
dependency injection container. To do that use the following code:
```csharp
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddClientBuilder(options =>
    {
        // your configuration comes here..
    });
}
```

::: warning USE IN DEVELOPMENT ONLY
Skip the registration of the required services if your application is outside 
of development environment
:::

You can find more information about the configuration of Client Builder services in the
**[Configuration Section](/guide/configuration)**.

### Enable UI and API endpoints
In order to consume easily the framework capabilities you need to enable the
Client Builder UI and its related web API. To do that use the following code:
```csharp
if (app.Environment.IsDevelopment())
{
    app.UseClientBuilderUI();
}
```
::: warning USE IN DEVELOPMENT ONLY
Never expose Client Builder endpoints if your application is not in development
:::

### Define scaffold modules
Client Builder is designed to provide generation capabilities to your application.
The main elements of the generation are the scaffold modules. More about the modules can be
found in **[Scaffold Modules Section](/scaffold-modules/definition)**.
