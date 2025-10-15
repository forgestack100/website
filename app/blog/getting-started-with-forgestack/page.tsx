import Link from "next/link"

export default function GettingStartedWithForgestack() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Getting Started with Forgestack</h1>
      <p className="mb-4">Welcome to Forgestack! This guide will help you get started with our platform.</p>

      <h2 className="text-2xl font-bold mb-2">What is Forgestack?</h2>
      <p className="mb-4">
        Forgestack is a platform designed to streamline your development workflow. It provides tools and resources to
        help you build, deploy, and manage your applications more efficiently.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Automated deployments</li>
        <li>Scalable infrastructure</li>
        <li>Integrated monitoring</li>
        <li>Collaboration tools</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Setting Up Your Account</h2>
      <p className="mb-4">
        To get started, you'll need to create an account. Visit our{" "}
        <Link href="/" className="text-blue-500 hover:underline">
          homepage
        </Link>{" "}
        and click on the "Sign Up" button.
      </p>

      <h2 className="text-2xl font-bold mb-2">Creating Your First Project</h2>
      <p className="mb-4">Once you have an account, you can create your first project. Follow these steps:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Log in to your account.</li>
        <li>Click on the "Create Project" button.</li>
        <li>Enter a name for your project.</li>
        <li>Select your preferred programming language and framework.</li>
        <li>Click "Create".</li>
      </ol>

      <h2 className="text-2xl font-bold mb-2">Deploying Your Application</h2>
      <p className="mb-4">
        After creating your project, you can deploy your application. We support various deployment methods, including
        Git integration and manual uploads.
      </p>

      <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
      <p className="mb-4">
        If you need help, check out our{" "}
        <Link href="/docs" className="text-blue-500 hover:underline">
          documentation
        </Link>{" "}
        or reach out to our support team.
      </p>

      <p className="mb-4">**[Join our Discord →](https://discord.gg/Rfd3y7NP)**</p>
    </div>
  )
}
