import { User, Client, Program, Class, Reservation, Exercise, Workout, DashboardStats, Coach, ReservationSettings } from './types'

// Mock Users/Coaches
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/sarah.jpg',
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/mike.jpg',
    createdAt: new Date('2023-02-20'),
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/emma.jpg',
    createdAt: new Date('2023-03-10'),
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    email: 'alex@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/alex.jpg',
    createdAt: new Date('2023-04-05'),
  },
  {
    id: '5',
    name: 'Lisa Park',
    email: 'lisa@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/lisa.jpg',
    createdAt: new Date('2023-05-12'),
  },
  {
    id: '6',
    name: 'Admin User',
    email: 'admin@fitnesspro.com',
    role: 'admin',
    avatar: '/avatars/admin.jpg',
    createdAt: new Date('2023-01-01'),
  },
]

// Mock Coaches with specialties
export const mockCoaches: Coach[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/sarah.jpg',
    createdAt: new Date('2023-01-15'),
    specialties: ['HIIT', 'Cardio', 'Boxing', 'Weight Loss'],
    isActive: true,
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/mike.jpg',
    createdAt: new Date('2023-02-20'),
    specialties: ['Strength Training', 'Powerlifting', 'Functional Fitness', 'Sports Performance'],
    isActive: true,
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/emma.jpg',
    createdAt: new Date('2023-03-10'),
    specialties: ['Yoga', 'Pilates', 'Flexibility', 'Mindfulness', 'Rehabilitation'],
    isActive: true,
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    email: 'alex@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/alex.jpg',
    createdAt: new Date('2023-04-05'),
    specialties: ['Boxing', 'Martial Arts', 'Self Defense', 'Conditioning'],
    isActive: true,
  },
  {
    id: '5',
    name: 'Lisa Park',
    email: 'lisa@fitnesspro.com',
    role: 'coach',
    avatar: '/avatars/lisa.jpg',
    createdAt: new Date('2023-05-12'),
    specialties: ['Spin', 'Cycling', 'Endurance', 'Cardio', 'Group Fitness'],
    isActive: true,
  },
]

// Mock Programs
export const mockPrograms: Program[] = [
  {
    id: '1',
    name: 'HIIT Cardio',
    description: 'High-intensity interval training for maximum calorie burn',
    color: '#dc2626', // Red
    category: 'cardio',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    name: 'Strength Training',
    description: 'Build muscle and increase strength with compound movements',
    color: '#1f2937', // Dark gray
    category: 'strength',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '3',
    name: 'Yoga Flow',
    description: 'Mindful movement and flexibility training',
    color: '#059669', // Green
    category: 'yoga',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '4',
    name: 'Boxing Basics',
    description: 'Learn boxing fundamentals and get a great workout',
    color: '#d97706', // Orange
    category: 'martial-arts',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '5',
    name: 'Functional Fitness',
    description: 'Real-world movement patterns for everyday strength',
    color: '#2563eb', // Blue
    category: 'fitness',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '6',
    name: 'Pilates Core',
    description: 'Core strengthening through controlled movements',
    color: '#7c3aed', // Purple
    category: 'fitness',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '7',
    name: 'Spin Class',
    description: 'High-energy indoor cycling workout',
    color: '#ea580c', // Orange-red
    category: 'cardio',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '8',
    name: 'Power Yoga',
    description: 'Dynamic and challenging yoga practice',
    color: '#16a34a', // Green
    category: 'yoga',
    isActive: true,
    createdAt: new Date('2023-01-01'),
  },
]

// Mock Clients
export const mockClients: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    dateOfBirth: new Date('1990-05-15'),
    emergencyContact: {
      name: 'Jane Smith',
      phone: '(555) 123-4568',
      relationship: 'Spouse',
    },
    membershipType: 'active',
    membershipStartDate: new Date('2023-01-15'),
    notes: 'Prefers morning classes',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@email.com',
    phone: '(555) 234-5678',
    dateOfBirth: new Date('1985-08-22'),
    emergencyContact: {
      name: 'Carlos Garcia',
      phone: '(555) 234-5679',
      relationship: 'Husband',
    },
    membershipType: 'active',
    membershipStartDate: new Date('2023-02-10'),
    notes: 'Loves yoga and strength training',
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '3',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@email.com',
    phone: '(555) 345-6789',
    dateOfBirth: new Date('1988-12-03'),
    emergencyContact: {
      name: 'Lisa Wilson',
      phone: '(555) 345-6790',
      relationship: 'Sister',
    },
    membershipType: 'active',
    membershipStartDate: new Date('2023-03-05'),
    notes: 'Boxing enthusiast',
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '4',
    firstName: 'Jennifer',
    lastName: 'Brown',
    email: 'jennifer.brown@email.com',
    phone: '(555) 456-7890',
    dateOfBirth: new Date('1992-04-18'),
    emergencyContact: {
      name: 'Robert Brown',
      phone: '(555) 456-7891',
      relationship: 'Father',
    },
    membershipType: 'suspended',
    membershipStartDate: new Date('2023-01-20'),
    membershipEndDate: new Date('2024-02-20'),
    notes: 'Suspended due to payment issues',
    createdAt: new Date('2023-01-20'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Taylor',
    email: 'michael.taylor@email.com',
    phone: '(555) 567-8901',
    dateOfBirth: new Date('1987-09-30'),
    emergencyContact: {
      name: 'Amanda Taylor',
      phone: '(555) 567-8902',
      relationship: 'Wife',
    },
    membershipType: 'active',
    membershipStartDate: new Date('2023-04-12'),
    notes: 'New member, interested in functional fitness',
    createdAt: new Date('2023-04-12'),
    updatedAt: new Date('2024-01-15'),
  },
]

// Mock Classes - Comprehensive scheduling data
export const mockClasses: Class[] = [
  // Monday Classes
  {
    id: '1',
    name: 'Morning HIIT Blast',
    programId: '1',
    coachId: '1',
    date: new Date('2024-07-22'), // Monday
    startTime: '06:00',
    endTime: '06:45',
    capacity: 20,
    enrolled: 18,
    location: 'Studio A',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1], // Monday
    },
    status: 'scheduled',
    notes: 'High-energy start to the week',
  },
  {
    id: '2',
    name: 'Strength Foundations',
    programId: '2',
    coachId: '2',
    date: new Date('2024-07-22'), // Monday
    startTime: '07:00',
    endTime: '08:00',
    capacity: 15,
    enrolled: 12,
    location: 'Weight Room',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1, 3, 5], // Mon, Wed, Fri
    },
    status: 'scheduled',
  },
  {
    id: '3',
    name: 'Evening Yoga Flow',
    programId: '3',
    coachId: '3',
    date: new Date('2024-07-22'), // Monday
    startTime: '18:00',
    endTime: '19:00',
    capacity: 25,
    enrolled: 22,
    location: 'Studio B',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1, 4], // Mon, Thu
    },
    status: 'scheduled',
  },

  // Tuesday Classes
  {
    id: '4',
    name: 'Boxing Fundamentals',
    programId: '4',
    coachId: '4',
    date: new Date('2024-07-23'), // Tuesday
    startTime: '06:30',
    endTime: '07:20',
    capacity: 12,
    enrolled: 10,
    location: 'Boxing Studio',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4], // Tue, Thu
    },
    status: 'scheduled',
  },
  {
    id: '5',
    name: 'Functional Movement',
    programId: '5',
    coachId: '2',
    date: new Date('2024-07-23'), // Tuesday
    startTime: '07:30',
    endTime: '08:15',
    capacity: 18,
    enrolled: 15,
    location: 'Functional Area',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'scheduled',
  },
  {
    id: '6',
    name: 'Pilates Core Power',
    programId: '6',
    coachId: '3',
    date: new Date('2024-07-23'), // Tuesday
    startTime: '12:00',
    endTime: '12:45',
    capacity: 16,
    enrolled: 14,
    location: 'Studio B',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 5], // Tue, Fri
    },
    status: 'scheduled',
  },
  {
    id: '7',
    name: 'Spin & Burn',
    programId: '7',
    coachId: '5',
    date: new Date('2024-07-23'), // Tuesday
    startTime: '18:30',
    endTime: '19:15',
    capacity: 20,
    enrolled: 20,
    location: 'Spin Studio',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'confirmed',
    notes: 'Class is full - waitlist available',
  },

  // Wednesday Classes
  {
    id: '8',
    name: 'Midweek Strength',
    programId: '2',
    coachId: '2',
    date: new Date('2024-07-24'), // Wednesday
    startTime: '07:00',
    endTime: '08:00',
    capacity: 15,
    enrolled: 13,
    location: 'Weight Room',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1, 3, 5], // Mon, Wed, Fri
    },
    status: 'scheduled',
  },
  {
    id: '9',
    name: 'Power Yoga Flow',
    programId: '8',
    coachId: '3',
    date: new Date('2024-07-24'), // Wednesday
    startTime: '12:15',
    endTime: '13:00',
    capacity: 20,
    enrolled: 16,
    location: 'Studio A',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [3, 6], // Wed, Sat
    },
    status: 'scheduled',
  },
  {
    id: '10',
    name: 'HIIT Express',
    programId: '1',
    coachId: '1',
    date: new Date('2024-07-24'), // Wednesday
    startTime: '17:45',
    endTime: '18:30',
    capacity: 20,
    enrolled: 17,
    location: 'Studio A',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [3], // Wed
    },
    status: 'scheduled',
  },

  // Thursday Classes
  {
    id: '11',
    name: 'Boxing Skills',
    programId: '4',
    coachId: '4',
    date: new Date('2024-07-25'), // Thursday
    startTime: '06:30',
    endTime: '07:20',
    capacity: 12,
    enrolled: 11,
    location: 'Boxing Studio',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4], // Tue, Thu
    },
    status: 'scheduled',
  },
  {
    id: '12',
    name: 'Functional Training',
    programId: '5',
    coachId: '2',
    date: new Date('2024-07-25'), // Thursday
    startTime: '07:30',
    endTime: '08:15',
    capacity: 18,
    enrolled: 16,
    location: 'Functional Area',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'scheduled',
  },
  {
    id: '13',
    name: 'Yoga & Mindfulness',
    programId: '3',
    coachId: '3',
    date: new Date('2024-07-25'), // Thursday
    startTime: '18:00',
    endTime: '19:00',
    capacity: 25,
    enrolled: 19,
    location: 'Studio B',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1, 4], // Mon, Thu
    },
    status: 'scheduled',
  },
  {
    id: '14',
    name: 'Spin Revolution',
    programId: '7',
    coachId: '5',
    date: new Date('2024-07-25'), // Thursday
    startTime: '18:30',
    endTime: '19:15',
    capacity: 20,
    enrolled: 18,
    location: 'Spin Studio',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'scheduled',
  },

  // Friday Classes
  {
    id: '15',
    name: 'Friday Strength',
    programId: '2',
    coachId: '2',
    date: new Date('2024-07-26'), // Friday
    startTime: '07:00',
    endTime: '08:00',
    capacity: 15,
    enrolled: 14,
    location: 'Weight Room',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [1, 3, 5], // Mon, Wed, Fri
    },
    status: 'scheduled',
  },
  {
    id: '16',
    name: 'Pilates Flow',
    programId: '6',
    coachId: '3',
    date: new Date('2024-07-26'), // Friday
    startTime: '12:00',
    endTime: '12:45',
    capacity: 16,
    enrolled: 12,
    location: 'Studio B',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 5], // Tue, Fri
    },
    status: 'scheduled',
  },
  {
    id: '17',
    name: 'TGIF HIIT',
    programId: '1',
    coachId: '1',
    date: new Date('2024-07-26'), // Friday
    startTime: '17:30',
    endTime: '18:15',
    capacity: 20,
    enrolled: 19,
    location: 'Studio A',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [5], // Fri
    },
    status: 'scheduled',
  },

  // Saturday Classes
  {
    id: '18',
    name: 'Weekend Warrior',
    programId: '5',
    coachId: '2',
    date: new Date('2024-07-27'), // Saturday
    startTime: '08:00',
    endTime: '08:45',
    capacity: 18,
    enrolled: 16,
    location: 'Functional Area',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'scheduled',
  },
  {
    id: '19',
    name: 'Power Yoga Weekend',
    programId: '8',
    coachId: '3',
    date: new Date('2024-07-27'), // Saturday
    startTime: '09:00',
    endTime: '09:45',
    capacity: 20,
    enrolled: 17,
    location: 'Studio A',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [3, 6], // Wed, Sat
    },
    status: 'scheduled',
  },
  {
    id: '20',
    name: 'Saturday Spin',
    programId: '7',
    coachId: '5',
    date: new Date('2024-07-27'), // Saturday
    startTime: '10:00',
    endTime: '10:45',
    capacity: 20,
    enrolled: 15,
    location: 'Spin Studio',
    isRecurring: true,
    recurrencePattern: {
      frequency: 'weekly',
      daysOfWeek: [2, 4, 6], // Tue, Thu, Sat
    },
    status: 'scheduled',
  },

  // One-time special classes
  {
    id: '21',
    name: 'Boxing Workshop',
    programId: '4',
    coachId: '4',
    date: new Date('2024-07-28'), // Sunday
    startTime: '14:00',
    endTime: '15:30',
    capacity: 15,
    enrolled: 8,
    location: 'Boxing Studio',
    isRecurring: false,
    status: 'scheduled',
    notes: 'Special workshop for beginners',
  },
  {
    id: '22',
    name: 'Yoga Retreat Session',
    programId: '3',
    coachId: '3',
    date: new Date('2024-08-03'), // Next Saturday
    startTime: '10:00',
    endTime: '12:00',
    capacity: 30,
    enrolled: 5,
    location: 'Main Studio',
    isRecurring: false,
    status: 'scheduled',
    notes: 'Extended session with meditation',
  },
  {
    id: '23',
    name: 'Cancelled Class Example',
    programId: '1',
    coachId: '1',
    date: new Date('2024-07-29'), // Monday next week
    startTime: '06:00',
    endTime: '06:45',
    capacity: 20,
    enrolled: 0,
    location: 'Studio A',
    isRecurring: false,
    status: 'cancelled',
    notes: 'Cancelled due to coach illness',
  },
]

// Mock Reservations
export const mockReservations: Reservation[] = [
  {
    id: '1',
    classId: '1',
    class: mockClasses[0],
    clientId: '1',
    client: mockClients[0],
    status: 'confirmed',
    reservedAt: new Date('2024-01-14T10:00:00'),
  },
  {
    id: '2',
    classId: '1',
    class: mockClasses[0],
    clientId: '2',
    client: mockClients[1],
    status: 'confirmed',
    reservedAt: new Date('2024-01-14T11:30:00'),
  },
  {
    id: '3',
    classId: '2',
    class: mockClasses[1],
    clientId: '3',
    client: mockClients[2],
    status: 'confirmed',
    reservedAt: new Date('2024-01-14T09:15:00'),
  },
  {
    id: '4',
    classId: '3',
    class: mockClasses[2],
    clientId: '1',
    client: mockClients[0],
    status: 'confirmed',
    reservedAt: new Date('2024-01-14T16:45:00'),
  },
  {
    id: '5',
    classId: '4',
    class: mockClasses[3],
    clientId: '5',
    client: mockClients[4],
    status: 'confirmed',
    reservedAt: new Date('2024-01-15T14:20:00'),
  },
]

// Mock Exercises
export const mockExercises: Exercise[] = [
  {
    id: '1',
    name: 'Push-ups',
    description: 'Classic bodyweight exercise for chest, shoulders, and triceps',
    category: 'strength',
    muscleGroups: ['chest', 'shoulders', 'triceps'],
    difficulty: 'beginner',
    instructions: [
      'Start in a plank position with hands slightly wider than shoulders',
      'Lower your body until chest nearly touches the floor',
      'Push back up to starting position',
      'Keep your core tight throughout the movement'
    ],
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    name: 'Squats',
    description: 'Fundamental lower body exercise',
    category: 'strength',
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
    difficulty: 'beginner',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower your body as if sitting back into a chair',
      'Keep your chest up and knees behind toes',
      'Return to standing position'
    ],
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '3',
    name: 'Burpees',
    description: 'Full-body conditioning exercise',
    category: 'cardio',
    muscleGroups: ['full-body'],
    difficulty: 'intermediate',
    instructions: [
      'Start standing, then drop into a squat position',
      'Place hands on ground and kick feet back into plank',
      'Perform a push-up, then jump feet back to squat',
      'Jump up from squat position'
    ],
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '4',
    name: 'Plank',
    description: 'Core stability exercise',
    category: 'strength',
    muscleGroups: ['core', 'shoulders'],
    difficulty: 'beginner',
    instructions: [
      'Start in forearm plank position',
      'Keep body in straight line from head to heels',
      'Engage core muscles',
      'Hold position for specified time'
    ],
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '5',
    name: 'Mountain Climbers',
    description: 'Dynamic cardio exercise',
    category: 'cardio',
    muscleGroups: ['core', 'shoulders', 'legs'],
    difficulty: 'intermediate',
    instructions: [
      'Start in plank position',
      'Drive one knee toward chest',
      'Quickly switch legs in running motion',
      'Keep core engaged throughout'
    ],
    createdAt: new Date('2023-01-01'),
  },
]

// Mock Workouts
export const mockWorkouts: Workout[] = [
  {
    id: '1',
    name: 'Full Body HIIT',
    description: 'High-intensity full body workout',
    exercises: [
      {
        id: '1',
        exerciseId: '1',
        exercise: mockExercises[0],
        sets: 3,
        reps: 10,
        restTime: 60,
        order: 1,
      },
      {
        id: '2',
        exerciseId: '2',
        exercise: mockExercises[1],
        sets: 3,
        reps: 15,
        restTime: 60,
        order: 2,
      },
      {
        id: '3',
        exerciseId: '3',
        exercise: mockExercises[2],
        sets: 3,
        reps: 8,
        restTime: 90,
        order: 3,
      },
    ],
    estimatedDuration: 30,
    difficulty: 'intermediate',
    category: 'hiit',
    isTemplate: true,
    createdAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    name: 'Core Focus',
    description: 'Core strengthening workout',
    exercises: [
      {
        id: '4',
        exerciseId: '4',
        exercise: mockExercises[3],
        sets: 3,
        duration: 60,
        restTime: 30,
        order: 1,
      },
      {
        id: '5',
        exerciseId: '5',
        exercise: mockExercises[4],
        sets: 3,
        duration: 45,
        restTime: 30,
        order: 2,
      },
    ],
    estimatedDuration: 20,
    difficulty: 'beginner',
    category: 'core',
    isTemplate: true,
    createdAt: new Date('2023-01-01'),
  },
]

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  totalMembers: 156,
  activeClassesToday: 8,
  revenueThisMonth: 15420.50,
  pendingReservations: 23,
  averageClassAttendance: 78.5,
  newMembersThisMonth: 12,
}

// Mock Reservation Settings
export const mockReservationSettings: ReservationSettings = {
  reservationOpenHours: 168, // 7 days (7 * 24 hours)
  reservationCloseHours: 2, // 2 hours before class
  cancellationDeadlineHours: 12, // 12 hours before class
  lateCancellationFee: 15.00, // $15 fee for late cancellation
  noShowFee: 25.00, // $25 fee for no-show
  noShowPenaltyEnabled: true,
  autoWaitlistEnabled: true,
} 