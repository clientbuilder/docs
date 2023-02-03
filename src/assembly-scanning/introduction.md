# Introduction in assembly scanning

Assembly scanning and reflection are key concepts in C# programming that allow developers 
to inspect and manipulate the contents of an assembly at runtime. This is achieved through 
the use of the Reflection API, which provides access to the metadata and structure of an 
assembly.

Assembly scanning involves searching an assembly for types, methods, properties, and other 
members that are defined within the assembly. This process is performed by the Reflection 
API, and it allows developers to identify the types and members that are available within 
the assembly, as well as their associated metadata.

Once the types and members have been identified through assembly scanning, they can then 
be manipulated and utilized through reflection. Reflection allows developers to inspect 
the contents of an assembly and to interact with its types and members at runtime. This 
can be useful for a wide range of purposes, including code generation.

### Types
The Type object in C# is a fundamental concept that provides information about a specific 
type defined within a .NET assembly. It serves as a runtime representation of a type, 
including its name, namespace, base type, methods, properties, events, and more.

The Type object can be used to inspect and manipulate a type at runtime, making it a key 
component of the .NET Reflection API. You can use Type objects to determine the members 
defined within a type, to check whether a type implements a specific interface, to 
retrieve the attributes applied to a type, and much more.

To obtain a Type object, you can use methods such as ``Type.GetType()``, ``Assembly.GetTypes()``, 
or ``typeof()``. Once you have a Type object, you can use its properties and methods to 
inspect and interact with the type it represents. For example, you can use the ``Type.Name`` 
property to retrieve the name of the type, the ``Type.IsAbstract`` property to check if the 
type is abstract, or the ``Type.GetMethods()`` method to retrieve an array of MethodInfo 
objects representing the methods defined within the type.

There are several ways to identify types via reflection in C#, including:
- ``Type.GetType()``: This method allows you to retrieve the Type object that represents a specific type by using its fully qualified name.
- ``Assembly.GetTypes()``: This method returns an array of Type objects representing all the types defined within a specified assembly.
- ``Type.GetInterfaces()``: This method returns an array of Type objects representing all the interfaces implemented by a specific type.
- ``Type.IsSubclassOf()``: This method returns a Boolean value indicating whether a type is derived from a specified type.
- ``Type.GetMethods()``: This method returns an array of MethodInfo objects representing all the methods defined within a specific type.
- ``Type.GetProperties()``: This method returns an array of PropertyInfo objects representing all the properties defined within a specific type.
- ``Type.GetEvents()``: This method returns an array of EventInfo objects representing all the events defined within a specific type.
- ``Type.GetFields()``: This method returns an array of FieldInfo objects representing all the fields defined within a specific type.
- ``Type.GetCustomAttributes()``: This method returns an array of objects representing all the custom attributes defined for a specific type.

These methods allow you to retrieve information about the types defined within an assembly and to use that information to interact with the types at runtime. Reflection is a powerful and flexible concept in C# programming, allowing you to inspect and manipulate the contents of an assembly in a variety of ways.

### Inspection
There are several other ways to mark classes, properties, methods, and other elements 
for inspection via reflection in C#:

- **Naming Conventions**: You can use naming conventions to indicate which elements should be processed by reflection. For example, you might have a convention that all classes with names starting with "Inspect" should be processed.
- **Interfaces**: You can define an interface that classes must implement to be processed by reflection. For example, you could define an interface called "IInspectable" and only classes that implement that interface would be processed.
- **Custom Flags Enums**: You can define a custom flags enum to indicate which elements should be processed by reflection. For example, you might define an enum with values such as "Inspect", "DoNotInspect", and "ConditionallyInspect", and then use those values to indicate which elements should be processed.
- **Reflection Attributes**: You can define a custom reflection attribute that indicates whether an element should be processed. For example, you might define an attribute called "InspectableAttribute" and use it to indicate which classes, properties, methods, and other elements should be processed by reflection.
- **External Configuration Files**: You can use an external configuration file, such as an XML file, to store information about which elements should be processed by reflection. For example, you might have a configuration file that lists the names of the classes that should be processed.
- **Programmatic Decisions**: Finally, you can make programmatic decisions about which elements should be processed based on any number of factors, such as the value of a particular property, the type of an object, or the presence of a specific method.

In summary, there are several ways to mark classes, properties, methods, and other 
elements for inspection via reflection, in addition to using attributes. The approach 
you choose will depend on the specific requirements of your application.
