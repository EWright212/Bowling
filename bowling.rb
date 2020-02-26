def bowling_score(frames)
  scores_to_array = frames.split("")
  scores_to_array.delete(" ")
  org_frames_in_array = frames.split("")
#first_array - convert to integer, where spares and strikes have no bonus value yet
 integer_scores_first_array = scores_to_array.each.with_index.map do |roll, idx|
   if roll == "X"
     roll = 10
   elsif roll == "/"
     roll = (10 - scores_to_array[idx-1].to_i)
   else
      roll = roll.to_i
   end
 end
integer_scores_second_array = integer_scores_first_array.dup
# now bonus scores are added in to bonus array
 bonus_array = scores_to_array.each.with_index.map do |roll, idx|
   if roll == "X"
         if integer_scores_second_array[idx+2] == nil
           integer_scores_second_array[idx+2] =0
           integer_scores_second_array[idx+1] =0
           if integer_scores_second_array[idx+1] == nil 
             integer_scores_second_array[idx+1] =0
           end
         end
       roll = integer_scores_second_array[idx+1] + integer_scores_second_array[idx+2]
   elsif roll == "/"
       if integer_scores_second_array[idx+1] == nil 
             integer_scores_second_array[idx+1] =0
       end
     roll = integer_scores_second_array[idx+1] 
   else
      roll = 0
   end
 end 
#note - some last rounds are for bonuses ONLY - need to fix this 
integer_scores_final_array = integer_scores_first_array
last_position_org = org_frames_in_array.length
last_position = integer_scores_final_array.length
 if org_frames_in_array[(last_position_org -3)] =="X"
   integer_scores_final_array.delete_at(last_position -1)
   integer_scores_final_array.delete_at(last_position -2)
 elsif org_frames_in_array[last_position_org -2] =="/"
   integer_scores_final_array.delete_at(last_position -1)
 end
 #integer_scores_array = first array + bonuses
#p integer_scores_first_array
 sum_scores_in_final_array = integer_scores_final_array.reduce(0, :+)
 sum_bonus = bonus_array.reduce(0, :+)
 total = sum_scores_in_final_array + sum_bonus
end

