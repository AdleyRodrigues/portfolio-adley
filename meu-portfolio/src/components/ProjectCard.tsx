import { Link } from 'react-router-dom'
import { Box, Card, CardContent, Typography } from '@mui/material'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import DataObjectRoundedIcon from '@mui/icons-material/DataObjectRounded'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import HubRoundedIcon from '@mui/icons-material/HubRounded'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import type { Project } from '../types/site'
import { analyticsEvents } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { Tag } from './ui/Tag'
import { motion } from 'framer-motion'
import { projectVisuals } from '../data/visualAssets'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

function getStackIcon(stack: string) {
  const value = stack.toLowerCase()
  if (value.includes('react') || value.includes('typescript') || value.includes('api')) return <DataObjectRoundedIcon sx={{ fontSize: 14 }} />
  if (value.includes('sql') || value.includes('database')) return <StorageRoundedIcon sx={{ fontSize: 14 }} />
  if (value.includes('dashboard') || value.includes('analytics')) return <QueryStatsRoundedIcon sx={{ fontSize: 14 }} />
  if (value.includes('ci') || value.includes('devops')) return <HubRoundedIcon sx={{ fontSize: 14 }} />
  return <CodeRoundedIcon sx={{ fontSize: 14 }} />
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const visual = projectVisuals[project.slug]

  return (
    <Card
      component={motion.article}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: 'background.paper',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          insetInline: 0,
          top: 0,
          height: 120,
          backgroundImage: project.coverGradient,
          opacity: 0.9,
          filter: 'blur(36px)',
        }}
      />
      <CardContent sx={{ position: 'relative', p: 3 }}>
        {visual ? (
          <Box
            component={motion.img}
            loading="lazy"
            src={visual.cover}
            alt={`Preview do projeto ${project.title}`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            sx={{
              mb: 2.2,
              borderRadius: 2.2,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              height: 170,
              objectFit: 'cover',
            }}
          />
        ) : null}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.16em', fontWeight: 700 }}>
            {project.role}
          </Typography>
          <Box
            sx={{
              borderRadius: 999,
              px: 1.2,
              py: 0.4,
              bgcolor: 'text.primary',
              color: (theme) => theme.palette.background.default,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            {project.metric}
          </Box>
        </Box>

        <Typography variant="h5" sx={{ mt: 1.5, fontSize: '1.35rem' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {project.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.4, lineHeight: 1.75 }}>
          {compact ? project.summary : project.impact}
        </Typography>

        <Box component="ul" sx={{ mt: 2.2, display: 'flex', flexWrap: 'wrap', gap: 0.9, p: 0, m: 0, listStyle: 'none' }}>
          {project.stack.map((tech) => (
            <Box key={tech} component="li">
              <Tag
                sx={{
                  '& .MuiChip-label': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                  },
                }}
              >
                <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  {getStackIcon(tech)}
                </Box>
                {tech}
              </Tag>
            </Box>
          ))}
        </Box>

        <Box
          component={Link}
          to={`/projetos/${project.slug}`}
          sx={{
            mt: 2.6,
            display: 'inline-flex',
            color: 'text.primary',
            fontSize: 14,
            fontWeight: 700,
            textUnderlineOffset: '4px',
            textDecorationColor: 'divider',
            '&:hover': {
              textDecorationColor: 'text.primary',
            },
          }}
          onClick={() => trackEvent(analyticsEvents.projectCardClick, { slug: project.slug })}
        >
          Ver estudo de caso
        </Box>
      </CardContent>
    </Card>
  )
}
