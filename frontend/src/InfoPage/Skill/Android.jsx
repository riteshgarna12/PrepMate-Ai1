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

        {/* Android – Advanced Practice Questions */}
<section className="bg-white rounded-xl shadow-lg m-2 p-6 border border-[var(--color-accent-light)] mb-12">
  <div className="max-w-3xl mx-auto text-left  text-[var(--color-text-muted)]">
  <h2 className="text-2xl font-semibold text-[var(--color-accent-dark)] mb-4">🤖 Android – Advanced Practice Questions</h2>
  
  <ol className="list-decimal pl-6 space-y-4 text-[var(--color-text-main)]">
    <li>
      How does Android’s Jetpack Compose differ from traditional XML-based UI design?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Jetpack Compose uses a declarative Kotlin-based syntax to define UIs, eliminating XML. It provides state-based rendering and is more reactive compared to the imperative XML + ViewModel approach.
      </details>
    </li>
    <li>
      What is a CoroutineScope and how is it used in Android?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        CoroutineScope defines the lifecycle of coroutines. It’s used to launch coroutines tied to Android components (e.g., lifecycleScope in activities/fragments) to ensure proper cancellation.
      </details>
    </li>
    <li>
      What is the difference between `StateFlow` and `LiveData`?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        StateFlow is a Flow-based, Kotlin-first alternative to LiveData. It’s more suitable for Kotlin coroutines, offers better state management, and is cold & lifecycle-unaware by default.
      </details>
    </li>
    <li>
      How does WorkManager ensure task reliability even after app restart?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        WorkManager uses Room internally to persist task data and constraints. It re-schedules tasks using JobScheduler or AlarmManager even after reboot.
      </details>
    </li>
    <li>
      Explain the usage of `@HiltViewModel` in dependency injection.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        `@HiltViewModel` annotates ViewModels to be injected using Hilt. It provides lifecycle-aware DI and manages instances within the ViewModelStore automatically.
      </details>
    </li>
    <li>
      What are the best practices for handling runtime permissions in Android 13+?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Use `ActivityResultLauncher`, check `shouldShowRequestPermissionRationale`, and handle granular media, location, and notification permissions introduced in Android 13+.
      </details>
    </li>
    <li>
      What is the role of `ViewModelSavedStateHandle`?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        It allows ViewModels to restore UI state after process death or configuration changes using a key-value mechanism similar to `onSaveInstanceState`.
      </details>
    </li>
    <li>
      Compare Room with Realm and SQLite. When to use what?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Room is built on SQLite, provides compile-time validation and Kotlin support. Realm is object-based and faster for reactive needs. SQLite offers raw control but requires manual handling.
      </details>
    </li>
    <li>
      How do you optimize RecyclerView performance in complex lists?
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Use `ListAdapter` with `DiffUtil`, set fixed size, use ViewHolder pattern, enable view recycling, and avoid nested layouts or heavy bindings inside `onBindViewHolder`.
      </details>
    </li>
    <li>
      Explain Scoped Storage and its impact on file access.
      <details className="text-sm mt-1 text-gray-600">
        <summary className="cursor-pointer">Show Answer</summary>
        Scoped Storage restricts access to app-specific and shared media directories. Apps must use `MediaStore` and `Storage Access Framework` for external files starting Android 10+.
      </details>
    </li>
  </ol>
  </div>
</section>


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
