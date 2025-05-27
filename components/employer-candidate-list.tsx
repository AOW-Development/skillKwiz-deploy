"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import jsPDF from "jspdf";

export default function EmployerCandidateList() {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "both">("male");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C#"]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const candidates = [
    {
      id: 1,
      name: "K. Pradeep Kishor",
      initial: "P",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Manoj",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-yellow-600",
    },
    {
      id: 3,
      name: "Kasiro",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-teal-600",
    },
    {
      id: 4,
      name: "Ravi",
      initial: "R",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-blue-800",
    },
  ];

  const downloadPDF = (candidate: typeof candidates[0]) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Candidate Report`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${candidate.name}`, 20, 30);
    doc.text(`Company: ${candidate.company}`, 20, 40);
    doc.text(`Location: ${candidate.location}`, 20, 50);
    doc.text(`Skills: ${candidate.skills.join(", ")}`, 20, 60);
    doc.text(`Percentile Score: ${candidate.percentile}`, 20, 70);
    doc.text(`\n\nThis is a dummy report generated using jsPDF.`, 20, 90);
    doc.save(`${candidate.name.replace(/ /g, "_")}_Report.pdf`);
  };

  return (
    <div className="text-white">
      {/* Search Bar */}
      <div className="bg-[#1a2b4a] rounded-full overflow-hidden mb-6">
        <div className="grid grid-cols-4">
          <div className="col-span-1 flex items-center px-4 py-3 border-r border-gray-600">
            <Search className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Candidate Email ID/Phone/Skill"
              className="bg-transparent w-full focus:outline-none text-white"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full focus:outline-none text-white"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-600">
            <div className="relative w-full">
              <select className="w-full bg-transparent appearance-none focus:outline-none text-white">
                <option value="">Job Family</option>
                <option value="software">Software Development</option>
                <option value="data">Data Science</option>
                <option value="design">Design</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <button className="text-white hover:text-gray-300">Clear</button>
            <button className="bg-[#00bcd4] text-white px-6 py-1 rounded-full hover:bg-[#00a5bb]">Search</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Filters */}
        <div className="col-span-1">
          <div className="bg-[#4a63b3] rounded-lg overflow-hidden">
            <div className="bg-[#4a63b3] p-4 text-xl font-medium">Filter</div>

            <div className="border-t border-blue-400 p-4">
              <h3 className="text-lg mb-3">Gender</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="male"
                    checked={selectedGender === "male" || selectedGender === "both"}
                    onChange={() =>
                      setSelectedGender(selectedGender === "female" ? "both" : "male")
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="female"
                    checked={selectedGender === "female" || selectedGender === "both"}
                    onChange={() =>
                      setSelectedGender(selectedGender === "male" ? "both" : "female")
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-400 p-4">
              <h3 className="text-lg mb-3">Skills</h3>
              {["C#", "Java", "SQL", "Python"].map((skill) => (
                <div className="flex items-center" key={skill}>
                  <input
                    type="checkbox"
                    id={skill}
                    checked={selectedSkills.includes(skill)}
                    onChange={() => toggleSkill(skill)}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor={skill}>{skill}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Candidate Cards */}
        <div className="col-span-3 space-y-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-[#4a63b3]/80 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}
                  >
                    {candidate.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{candidate.name}</h3>
                    <p className="text-gray-300">{candidate.company}</p>
                    <div className="flex items-center mt-1 text-sm">
                      <p>Skills: {candidate.skills.join(", ")}</p>
                      <div className="mx-4 h-4 border-l border-gray-400" />
                      <p>Percentile Score: {candidate.percentile}</p>
                      <div className="mx-4 h-4 border-l border-gray-400" />
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <p>{candidate.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => downloadPDF(candidate)}
                  className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg hover:bg-[#00a5bb]"
                >
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
