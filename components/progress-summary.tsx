"use client"

import { motion } from "framer-motion"
import { BarChart2, Clock, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressSummary() {
  const stats = [
    {
      title: "Study Streak",
      value: "5 days",
      icon: Flame,
      color: "text-study-purple",
      bgColor: "bg-study-purple/10",
      progress: 71, // 5 out of 7 days
    },
    {
      title: "Weekly Goal",
      value: "4.5/10 hrs",
      icon: Clock,
      color: "text-study-blue",
      bgColor: "bg-study-blue/10",
      progress: 45,
    },
    {
      title: "Course Progress",
      value: "35% complete",
      icon: BarChart2,
      color: "text-study-teal",
      bgColor: "bg-study-teal/10",
      progress: 35,
    },
  ]

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Your Progress</h2>

      <div className="grid grid-cols-1 gap-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="border-none shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-full ${stat.bgColor} flex items-center justify-center ${stat.color}`}
                  >
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium">{stat.title}</h3>
                      <span className="text-sm">{stat.value}</span>
                    </div>
                    <Progress value={stat.progress} className="h-1.5 mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

