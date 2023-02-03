# File Templates

### Contract
The ``IFileTemplate`` interface is a simple interface that defines a single method for 
rendering data as a string, which is intended to be used for generating the content of 
a file. The ``Render`` method takes a single argument, contextData, which is an object 
that represents the data that should be used to generate the output string. The method 
returns a string that represents the rendered output.

Classes that implement the IFileTemplate interface are expected to contain the logic 
for rendering the output, using the data passed to the Render method. For example, a 
class named HandlebarsFileTemplate could use the Handlebars engine to generate the 
output based on the contextData argument. In this way, the ``IFileTemplate`` interface 
provides a flexible and reusable way to generate content for different types of files, 
using a variety of rendering engines and technologies.

```csharp
public interface IFileTemplate
{
    string Render(object contextData);
}
```

### Built-in implementations
This section provides an overview of the built-in implementations of the ``IFileTemplate`` 
interface, which offer pre-configured solutions for generating content for different 
types of files. Whether you need to generate reports, create custom code files, or 
perform any other task that requires the dynamic generation of text data, these built-in 
implementations provide a simple and easy-to-use solution.

<br/>

#### Handlebars
Handlebars is a popular templating engine for JavaScript and other web development 
frameworks. It provides a simple and powerful way to generate dynamic HTML, JSON, and 
other text formats based on a template and a set of data. With Handlebars, you can define 
templates using placeholders for data, which are then filled in with actual values at 
runtime. Handlebars templates are easy to read, write, and maintain, making them a great 
choice for developers who need to generate dynamic content in their applications. In 
addition, Handlebars supports a range of features including helpers, block expressions, 
and conditional statements, allowing you to build complex templates with ease. Whether 
you're building a simple static website or a complex web application, Handlebars can 
help you generate high-quality, dynamic content with ease.

More about the template engine itself can be found on the library website: 
**[handlebarsjs.com](https://handlebarsjs.com/)** and **[Handlebars.Net NuGet package](https://www.nuget.org/packages/Handlebars.Net/)**.

To use Handlebars as a template engine in your module file follow the structure:
```csharp
this.AddFile(new ScaffoldModuleFile
{
    Name = "enums.ts",
    Template = new HandlebarsFileTemplate("ClientBuilder", "Modules", "WebApi", "Templates", "Enums.hbs"), // params define the path to the template file
    ContextData = new
    {
        enums,
    },
});
```

::: info CONTEXT DATA MUST BE AN OBJECT
Consider Handlebars is serializing the model in order to use it so be careful with the 
object properties
:::

<br/>

Sample template would be:
```handlebars
{{#each enums}}
    export enum {{this.name}} {
    {{#each this.enumValues as | enumValue |}}
        {{@key}} = {{value}},
    {{/each}}
    }

{{/each}}
```

<br/>

#### T4
T4 (Text Template Transformation Toolkit) is a code generation tool included with 
Microsoft Visual Studio. It provides a way to generate source code and other text files 
from templates, using a combination of text, control structures, and placeholders for 
dynamic data. T4 templates can be used to generate a wide range of outputs, such as C# or 
HTML code, XML configuration files, and more. The templates themselves can contain a mix 
of static text and dynamic content, which is generated at runtime based on the data passed 
to the template. T4 is an extremely flexible tool, and its templates can be used to 
perform a wide range of code generation tasks, from generating simple boilerplate code to 
creating complex, custom output. Whether you're a developer looking to automate repetitive 
tasks or a project manager looking to streamline your team's workflow, T4 can help you 
increase productivity and reduce the time it takes to complete your projects.

To use T4 as a template engine in your module file follow the structure:
```csharp
this.AddFile(new ScaffoldModuleFile
{
    Name = $"constants.ts",
    Template = new T4FileTemplate(typeof(ConstantsTemplate)),
    ContextData = new Dictionary<string, object>
    {
        {
            "Constants",
            new Dictionary<string, string>
            {
                { "BASE_URL", "https://clientbuilder.dev" },
                { "APP_NAME", "Client Builder" },
            }
        },
    }
});
```

::: info CONTEXT DATA MUST BE A DICTIONARY
Consider that context data of your template is the **Session** property of your template 
:::

<br/>

Sample template would be:
```t4
<#@ template language="C#" #>
<#@ assembly name="System.Core" #>
<#@ import namespace="System.Collections.Generic" #>

<# foreach (var constant in (Dictionary<string, string>)Session["Constants"]) { #>
export const <#=constant.Key#> = '<#=constant.Value#>';

<# } #>
```

::: warning IMPORTANT
T4 templates must be defined for runtime rendering with custom tool option value - **TextTemplatingFilePreprocessor**.
Indicator for the proper template working is the existing of related class for the template file.
:::

<br/>

#### JSON
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy 
for humans to read and write and easy for machines to parse and generate. It is an open 
standard format that uses a simple text-based syntax to represent data structures and 
objects, making it an ideal choice for exchanging data between applications and services. 
JSON is widely used in web applications, APIs, and data storage solutions, as it provides 
a convenient way to transmit and store data in a compact and portable format. JSON data 
is typically represented as key-value pairs, with values ranging from simple data types 
like strings and numbers, to more complex data structures like arrays and objects. Its 
simplicity, ease of use, and versatility make JSON one of the most popular data formats 
in use today.

To use JSON as a template engine in your module file follow the structure:
```csharp
this.AddFile(new ScaffoldModuleFile
{
    Name = $"en.json",
    Template = new JsonFileTemplate(), // you can pass custom serialization settings in the constructor
    ContextData = new List<Translation>
    {
        new Translation { Language = "en", Key = "HELLO", Value = "Hello" },
        new Translation { Language = "en", Key = "LOGIN", Value = "Login" },
    }
});
```

::: info CONTEXT DATA MUST BE SERIALIZABLE
Consider that context data will be serialized by ``Newtonsoft.Json`` library
:::

