import JobItem from "@/components/cardes/job-tem";
import { job } from "@/lib/types";
// const jobs = 
//   {
//     id: "1",
//     title: "Designer",
//     company: "Google",
//     city: "São Paulo",
//     salary: "R$ 5.000,00",
//   }

export default async function Vagas() {

  const response = await fetch("https://apis.codante.io/api/job-board/jobs", {
    cache: "no-store",
  });
  const json = await response.json();
  const jobs: job[] =  json.data;
  console.log(json.data);

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">

        {
          jobs.map((job) => <JobItem key={job.id} job={job} />)
        }

        {/* <JobItem job={jobs} />
        <JobItem job={jobs} />
        <JobItem job={jobs} />
        <JobItem job={jobs} /> */}
      </div>
    </main>
  );
}