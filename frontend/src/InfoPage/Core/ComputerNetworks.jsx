import React from "react";

const ComputerNetworks = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-teal-700 mb-8">🌐 Computer Networks</h1>

      {/* Theory Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 border border-text-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">🔗 What is a Network?</h2>
          <p className="text-lg">
            A computer network is a collection of interconnected devices that can communicate
            and share resources. The internet is the largest example of a network.
          </p>
        </div>

        <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 border border-text-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">📶 Types of Networks</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>LAN (Local Area Network)</li>
            <li>MAN (Metropolitan Area Network)</li>
            <li>WAN (Wide Area Network)</li>
            <li>CAN (Campus Area Network)</li>
          </ul>
        </div>

        <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 border border-text-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">🛠 OSI Model</h2>
          <p className="text-lg">
            OSI (Open Systems Interconnection) is a 7-layer architecture:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Application</li>
            <li>Presentation</li>
            <li>Session</li>
            <li>Transport</li>
            <li>Network</li>
            <li>Data Link</li>
            <li>Physical</li>
          </ul>
        </div>

        <div className="bg-white light:bg-gray-900 rounded-2xl shadow-lg p-6 border border-text-teal-300">
          <h2 className="text-2xl font-semibold text-teal-600 mb-2">💾 TCP/IP Model</h2>
          <p className="text-lg">
            The TCP/IP model has 4 layers: Application, Transport, Internet, and Network Access.
            It is the foundation of the modern internet.
          </p>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">💡 Tips & Tricks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-text-teal-50 light:bg-gray-800 p-5 rounded-xl shadow-md">
            <p>🔸 Remember the OSI model using: <strong>All People Seem To Need Data Processing</strong>.</p>
          </div>
          <div className="bg-=text-teal-50 light:bg-gray-800 p-5 rounded-xl shadow-md">
            <p>🔸 TCP is reliable, connection-oriented; UDP is fast, connectionless.</p>
          </div>
          <div className="bg-=text-teal-50 light:bg-gray-800 p-5 rounded-xl shadow-md">
            <p>🔸 IP addresses are divided into 5 classes; A, B, C are common.</p>
          </div>
          <div className="bg-=text-teal-50 light:bg-gray-800 p-5 rounded-xl shadow-md">
            <p>🔸 DNS resolves human-readable names to IP addresses (e.g., google.com → 142.250.182.206).</p>
          </div>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="mb-12 card">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">📝 Common Interview Questions</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Explain the OSI and TCP/IP models.</li>
          <li>What is the difference between TCP and UDP?</li>
          <li>How does DNS work?</li>
          <li>What is subnetting? Why is it used?</li>
          <li>What is a MAC address and how is it different from IP?</li>
          <li>What are the responsibilities of each layer in the OSI model?</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className=" card bg-purple-100 light:bg-gray-800 p-6 rounded-2xl shadow-lg border border-text-teal-300">
        <h2 className="text-2xl font-bold text-teal-700 mb-2">✅ Conclusion</h2>
        <p className="text-lg">
          Computer Networks are essential for modern communication. From understanding protocols like TCP/IP to
          mastering models like OSI, a solid grasp of networking concepts is crucial for software engineers, system administrators,
          and cybersecurity experts. Focus on models, routing, protocols, and real-world applications to master this domain.
        </p>
      </section>
        <h2 className="text-3xl font-bold text-teal-600 mb-6">🌐 Advanced Computer Networks</h2>

      {/* Routing Protocols */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">🚦 Routing Protocols</h3>
        <p className="text-lg mb-3">
          Routing protocols determine how data packets are forwarded from source to destination across networks. There are two major types:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg space-y-1">
          <li><strong>Distance Vector:</strong> e.g., RIP – uses hop count to determine shortest path.</li>
          <li><strong>Link State:</strong> e.g., OSPF – has complete topology knowledge and uses Dijkstra’s algorithm.</li>
        </ul>
      </div>

      {/* TCP/IP vs OSI */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">📦 TCP/IP vs OSI Model</h3>
        <p className="text-lg mb-3">
          While OSI is a theoretical model with 7 layers, TCP/IP is a practical implementation with 4 layers:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg">
          <li><strong>OSI:</strong> Application, Presentation, Session, Transport, Network, Data Link, Physical</li>
          <li><strong>TCP/IP:</strong> Application, Transport, Internet, Network Access</li>
        </ul>
      </div>

      {/* Firewalls and Network Security */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">🛡️ Firewalls & Network Security</h3>
        <p className="text-lg">
          A firewall is a security system that monitors and controls incoming and outgoing network traffic.
        </p>
        <ul className="list-disc list-inside ml-4 text-lg mt-3">
          <li><strong>Packet Filtering Firewall</strong>: Examines headers of each packet.</li>
          <li><strong>Stateful Inspection Firewall</strong>: Keeps track of active connections.</li>
          <li><strong>Application-Level Gateway</strong>: Filters data based on the application.</li>
        </ul>
      </div>

      {/* IPv4 vs IPv6 */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">🌐 IPv4 vs IPv6</h3>
        <p className="text-lg mb-3">
          <strong>IPv4:</strong> 32-bit address (e.g., 192.168.1.1)<br />
          <strong>IPv6:</strong> 128-bit address (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)
        </p>
        <ul className="list-disc list-inside ml-4 text-lg">
          <li>IPv4 has 4.3 billion addresses; IPv6 has 340 undecillion.</li>
          <li>IPv6 supports auto-configuration and better security.</li>
        </ul>
      </div>

      {/* Wireless & Mobile Networks */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">📡 Wireless & Mobile Networks</h3>
        <p className="text-lg">
          These networks allow communication without physical cables. They include:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg mt-2">
          <li><strong>Wi-Fi:</strong> Short-range wireless connectivity.</li>
          <li><strong>Bluetooth:</strong> Short-range data exchange between devices.</li>
          <li><strong>3G/4G/5G:</strong> Cellular networks for mobile data and voice.</li>
        </ul>
      </div>

      {/* Practice Interview Questions */}
      <div className="bg-white light:bg-gray-800 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-500 mb-2">📋 Practice Interview Questions</h3>
        <ul className="list-decimal list-inside ml-4 text-lg space-y-1">
          <li>Explain the differences between TCP and UDP.</li>
          <li>What is a subnet mask and how is it used?</li>
          <li>How does a router differ from a switch?</li>
          <li>What are the advantages of IPv6 over IPv4?</li>
          <li>Describe the role of DNS in networking.</li>
          <li>How does the 3-way handshake in TCP work?</li>
          <li>What is NAT and why is it used?</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-light-100 light:bg-purple-900 rounded-2xl shadow p-6 mb-8">
        <h3 className="text-2xl font-semibold text-teal-600 light:text-teal-300 mb-2">✅ Conclusion</h3>
        <p className="text-lg">
          Computer Networks form the foundation of the modern internet. A deep understanding of protocols,
          addressing schemes, and security mechanisms is crucial for anyone aspiring to enter the world of
          system design, backend engineering, DevOps, or cybersecurity.
        </p>
      </div>
      {/* DNS & DHCP */}
<div className="bg-white light:bg-gray-900 shadow-md rounded-2xl p-6 mb-6">
  <h2 className="text-2xl font-bold text-teal-600 mb-2">🌐 DNS & DHCP</h2>
  <p className="text-lg leading-relaxed mb-3">
    <strong>DNS (Domain Name System)</strong> translates domain names (like www.example.com) into IP addresses. It's essential for locating services on the internet.
    <br />
    <strong>DHCP (Dynamic Host Configuration Protocol)</strong> dynamically assigns IP addresses and other network settings (gateway, DNS, etc.) to devices in a network.
  </p>
  <ul className="list-disc pl-6 text-base">
    <li>DNS uses hierarchical structure: Root → TLD → Authoritative</li>
    <li>DHCP reduces manual configuration and IP conflicts</li>
    <li>DHCP offers lease duration, renewal, and reallocation</li>
  </ul>
</div>

{/* NAT */}
<div className="bg-white light:bg-gray-900 shadow-md rounded-2xl p-6 mb-6">
  <h2 className="text-2xl font-bold text-teal-600 mb-2">🔁 NAT (Network Address Translation)</h2>
  <p className="text-lg leading-relaxed mb-3">
    NAT allows multiple devices on a private network to access the internet using a single public IP address.
  </p>
  <ul className="list-disc pl-6 text-base">
    <li>Types: Static NAT, Dynamic NAT, and PAT (Port Address Translation)</li>
    <li>Used in routers to conserve IPv4 addresses</li>
    <li>Hides internal IP structure, providing basic security</li>
  </ul>
</div>

{/* VPN */}
<div className="bg-white light:bg-gray-900 shadow-md rounded-2xl p-6 mb-6">
  <h2 className="text-2xl font-bold text-teal-600 mb-2">🔒 VPN (Virtual Private Network)</h2>
  <p className="text-lg leading-relaxed mb-3">
    VPN creates a secure, encrypted connection over a public network, often the internet.
  </p>
  <ul className="list-disc pl-6 text-base">
    <li>Provides privacy, anonymity, and data protection</li>
    <li>Tunneling protocols: PPTP, L2TP, IPSec, OpenVPN</li>
    <li>Used in remote access and site-to-site connections</li>
  </ul>
</div>

{/* QoS */}
<div className="bg-white light:bg-gray-900 shadow-md rounded-2xl p-6 mb-6">
  <h2 className="text-2xl font-bold text-teal-600 mb-2">📊 QoS (Quality of Service)</h2>
  <p className="text-lg leading-relaxed mb-3">
    QoS manages network resources by prioritizing different types of traffic to ensure performance for critical applications.
  </p>
  <ul className="list-disc pl-6 text-base">
    <li>Important for VoIP, video conferencing, and gaming</li>
    <li>Metrics: Bandwidth, Latency, Jitter, Packet loss</li>
    <li>Implemented via classification, queuing, traffic shaping</li>
  </ul>
</div>

{/* Application Layer Protocols */}
<div className="bg-white light:bg-gray-900 shadow-md rounded-2xl p-6 mb-6">
  <h2 className="text-2xl font-bold text-teal-600 mb-2">📡 Application Layer Protocols</h2>
  <p className="text-lg leading-relaxed mb-3">
    These protocols operate at the top of the OSI model and enable user-level functionalities.
  </p>
  <ul className="list-disc pl-6 text-base">
    <li><strong>HTTP/HTTPS</strong>: Web communication over browsers</li>
    <li><strong>FTP/SFTP</strong>: File transfers</li>
    <li><strong>SMTP/POP3/IMAP</strong>: Email sending and retrieval</li>
    <li><strong>DNS</strong>: Domain resolution</li>
    <li><strong>SNMP</strong>: Network device monitoring</li>
  </ul>
</div>
<section className="px-6 py-12 max-w-5xl mx-auto">
  <div className="grid md:grid-cols-2 gap-6">
    {/* Summary Card */}
    <div className="bg-white light:bg-[#1e1e2f] shadow-lg rounded-2xl p-6 border border-text-teal-300">
      <h2 className="text-2xl font-bold text-teal-600 mb-4">📌 Computer Networks Summary</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li><strong>OSI Model:</strong> 7-layer model guiding network communication.</li>
        <li><strong>TCP/IP:</strong> Real-world protocol suite with 4 layers.</li>
        <li><strong>IP Addressing:</strong> IPv4 & IPv6 used to identify devices.</li>
        <li><strong>Routing:</strong> Determines the best path to deliver packets.</li>
        <li><strong>Switching:</strong> Circuit, Packet & Message switching methods.</li>
        <li><strong>Protocols:</strong> HTTP, FTP, SMTP, DNS, DHCP, ICMP, etc.</li>
        <li><strong>LAN/WAN:</strong> LAN for local; WAN spans wide geographical areas.</li>
        <li><strong>Security:</strong> SSL, Firewalls, Encryption & VPNs ensure safety.</li>
        <li><strong>Congestion Control:</strong> Avoiding packet loss due to traffic.</li>
        <li><strong>Application Layer:</strong> Deals with user interaction protocols.</li>
      </ul>
    </div>

    {/* Interview Questions Card */}
    <div className="bg-white light:bg-[#1e1e2f] shadow-lg rounded-2xl p-6 border border-text-teal-300">
      <h2 className="text-2xl font-bold text-teal-600 mb-4">💼 Interview Questions</h2>
      <ul className="list-decimal list-inside text-lg space-y-2">
        <li>What is the difference between TCP and UDP?</li>
        <li>Explain the 7 layers of the OSI model with examples.</li>
        <li>What is the role of DNS in networking?</li>
        <li>What is a MAC address and how is it different from IP?</li>
        <li>What are the different types of network topologies?</li>
        <li>What is subnetting and why is it used?</li>
        <li>How does ARP (Address Resolution Protocol) work?</li>
        <li>What is the difference between a switch and a router?</li>
        <li>Explain the concept of VPN and how it ensures secure communication.</li>
        <li>What happens when you type a URL in the browser?</li>
      </ul>
    </div>
  </div>
</section>

    </div>
  );
};

export default ComputerNetworks;
