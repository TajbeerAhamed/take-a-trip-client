import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question And Answer</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold text-blue-600 text-2xl">Difference between SQL and NoSQL?</h3>
                    <p ><p>SQL databases are relational,</p> NoSQL databases are non-relational.</p>
                    <p>SQL databases use structured query language and have a predefined schema. </p>
                    <p>NoSQL databases have dynamic schemas for unstructured data.</p>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                    <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                    <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-600 text-2xl">What is JWT, and how does it work?</h3>
                    <p>JWT is JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret or a public/private key pair using RSA or ECDSA.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-600 text-2xl">What is the difference between javascript and NodeJS?</h3>
                    <p> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-600 text-2xl">How does NodeJS handle multiple requests at the same time?</h3>
                    <p className='text-bold'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes themGiven a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blog;