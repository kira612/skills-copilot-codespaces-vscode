function skillsMember(){
  return {
    name: 'Skills Member',
    description: 'A member with skills',
    skills: ['JavaScript', 'Python', 'React'],
    getSkills: function() {
      return this.skills.join(', ');
    },
    addSkill: function(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
      }
    }
  };
}