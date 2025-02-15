import JobItem from "@/components/cardes/job-item";
import { job } from "@/lib/types";

async function fetchJobs() {
  const response = await fetch("https://apis.codante.io/api/job-board/jobs", {
    cache: "no-store",
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const json = await response.json();
  const jobs: job[] =  json.data;
  
  return jobs
}


export default async function Vagas() {
  const jobs = await fetchJobs();

  if(!jobs) {
    throw new Error("Failed to fetch jobs");
  }

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">

        {
          jobs.map((job) => <JobItem key={job.id} job={job} />)
        }
      </div>
    </main>
  );
}