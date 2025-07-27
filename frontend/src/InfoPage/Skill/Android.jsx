import React from "react";

const AndroidDevelopment = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto text-left text-[var(--color-text-muted)]">
      <h1 className="text-4xl font-bold text-[var(--color-accent-dark)] mb-8">📱 Android Development</h1>

      {/* Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">📘 What is Android Development?</h2>
          <p className="text-lg">
            Android Development is the process of creating applications for devices running the Android OS. Apps are typically built using Java or Kotlin with Android Studio IDE and the Android SDK.
          </p>
        </div>

        {/* Core Components */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">🧱 Core Components</h2>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li><strong>Activity</strong> – Entry point for user interaction.</li>
            <li><strong>Service</strong> – Background processing.</li>
            <li><strong>Broadcast Receiver</strong> – System-wide event listener.</li>
            <li><strong>Content Provider</strong> – Share data between apps.</li>
          </ul>
        </div>

        {/* Android Studio Setup */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)] md:col-span-2">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">🛠️ Setting up Android Studio</h2>
          <p className="text-lg">
            Download Android Studio → Install SDK Tools → Create Emulator → Start a new project → Choose Kotlin or Java → Build using XML and Jetpack libraries.
          </p>
        </div>

        {/* Example Code */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)] md:col-span-2">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">💡 Sample Kotlin Code</h2>
          <pre className="bg-[#ffffff] light:bg-zinc-800 p-4 rounded-lg overflow-auto text-sm text-[var(--color-text-main)]">
{`class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val button = findViewById<Button>(R.id.my_button)
        button.setOnClickListener {
            Toast.makeText(this, "Hello Android!", Toast.LENGTH_SHORT).show()
        }
    }
}`}
          </pre>
        </div>

        {/* Advanced Topics */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">🚀 Advanced Topics</h2>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li>Jetpack Compose</li>
            <li>Room Database</li>
            <li>MVVM Architecture</li>
            <li>Retrofit / Volley (API Integration)</li>
            <li>Firebase Authentication</li>
            <li>LiveData, ViewModel</li>
          </ul>
        </div>

        {/* Practice Questions */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)]">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">📝 Practice Questions</h2>
          <ul className="list-decimal pl-5 text-lg space-y-1">
            <li>What are the Android lifecycle methods?</li>
            <li>Difference between Service and IntentService?</li>
            <li>How does RecyclerView work?</li>
            <li>What is the use of ViewModel and LiveData?</li>
            <li>Explain Retrofit with example.</li>
          </ul>
        </div>

        {/* Tips & Tricks */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)] md:col-span-2">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">💡 Tips & Tricks</h2>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li>Use <code>ViewBinding</code> to avoid <code>findViewById</code>.</li>
            <li>Always handle runtime permissions properly.</li>
            <li>Follow MVVM or MVP for clean architecture.</li>
            <li>Test on multiple devices and screen sizes.</li>
            <li>Use Lint to catch common bugs.</li>
          </ul>
        </div>

        {/* Interview Qs + Conclusion */}
        <div className="bg-[var(--color-card-bg)] shadow-lg rounded-xl p-6 border border-[var(--color-card-border)] md:col-span-2">
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-2">🎯 Interview Questions + Summary</h2>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li>Explain Android app lifecycle and state transitions.</li>
            <li>What is Jetpack Compose? How does it differ from XML UI?</li>
            <li>How do you optimize an Android app's performance?</li>
            <li>Difference between Fragment and Activity?</li>
          </ul>
          <p className="mt-4 text-lg">
            <strong>In conclusion</strong>, Android Development is a powerful skill with wide applications in mobile, IoT, and embedded systems. With strong fundamentals in components, architecture, UI/UX, and backend integration, you can build modern, efficient mobile applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AndroidDevelopment;
