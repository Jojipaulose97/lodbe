export const ApplySection = () => {
  return (
    <section className="px-6 py-20 w-full bg-zinc-900">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
          Ready to Build with Us?
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Send your profile, portfolio, or GitHub to us. Include the role you&apos;re applying for,
          relevant work or portfolio, and a short note on why you want to join LODBE.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="mailto:careers@lodbe.com" className="inline-block bg-yellow-400 text-zinc-900 font-semibold text-sm px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors">
            careers@lodbe.com
          </a>
          <a href="#open-roles" className="inline-block border border-zinc-600 text-zinc-300 text-sm font-medium px-8 py-3 rounded-full hover:border-zinc-400 hover:text-white transition-colors">
            View Open Roles
          </a>
        </div>
      </div>
    </section>
  );
};