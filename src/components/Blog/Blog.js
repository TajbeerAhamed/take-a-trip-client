import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question And Answer</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold">Difference between SQL and NoSQL?</h3>
                    <p ><p>SQL databases are relational,</p> NoSQL databases are non-relational.</p>
                    <p>SQL databases use structured query language and have a predefined schema. </p>
                    <p>NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                    <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div>
                    <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                    <p className="mt-1 text-gray-400">JWT is JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair using RSA or ECDSA.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
                <div>
                    <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                    <p> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="mt-1 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog;