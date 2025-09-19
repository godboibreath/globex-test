SET STATISTICS TIME ON;
GO

with subdiv_tree (id, parent_id, name, sub_level) as (
	select id, parent_id, name, 1 as sub_level from subdivisions where id = (
		select collaborators.subdivision_id from collaborators where collaborators.id = 710253
	)

	union all

	select 
		s.id, 
		s.parent_id,
		s.name,
		sd.sub_level + 1 as sub_level
	from subdivisions as s
		join subdiv_tree as sd on s.parent_id = sd.id
), filtered_collaboratos as (
	select * from collaborators 
		where age < 40 and subdivision_id not in (100055, 100059)
), countered_collaborators as (
	select
		subdiv_tree.id,
		count(filtered_collaboratos.id) as colls_count
	from filtered_collaboratos
		join subdiv_tree on subdiv_tree.id = filtered_collaboratos.subdivision_id
	group by subdiv_tree.id
)

select 
	filtered_collaboratos.id,
	filtered_collaboratos.name,
	subdiv_tree.name as sub_name,
	subdiv_tree.id as sub_id, sub_level,
	colls_count
from filtered_collaboratos 
	join countered_collaborators on filtered_collaboratos.subdivision_id = countered_collaborators.id
	join subdiv_tree on subdiv_tree.id = countered_collaborators.id
order by sub_level asc;

SET STATISTICS TIME OFF;